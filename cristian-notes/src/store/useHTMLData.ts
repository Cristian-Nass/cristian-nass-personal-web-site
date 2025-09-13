import {create} from 'zustand';
import {database} from '../firebase/setup';
import {
  collection,
  getDocs,
  QuerySnapshot,
  type DocumentData,
} from 'firebase/firestore';
import {devtools} from 'zustand/middleware';

type HTMLDataItem = {
  title: string;
  subTitle: string;
  description: string;
  example: string;
};

export type HTMLDataType = {
  about: string;
  htmlData: HTMLDataItem[];
};

type HTMLData = {
  data: HTMLDataType;
  about?: string;
  getHTMLData: () => Promise<void>;
  setHTMLData: (data: HTMLDataType) => void;
};

export const useHTMLData = create<HTMLData>()(
  devtools((set) => ({
    data: {
      about: '',
      htmlData: [],
    },
    getHTMLData: async () => {
      const htmlDataArray = await fetchHTMLData('html');
      if (htmlDataArray) {
        set({
          data: {
            about: 'Modern HTML semantic structure',
            htmlData: htmlDataArray.map((item) => ({
              title: item.title,
              subTitle: item.subTitle,
              description: item.description,
              example: item.example,
            })),
          },
        });
      }
    },
    setHTMLData: (data: HTMLDataType) => set({data}),
  }))
);

const fetchHTMLData = async (
  collectionName: string
): Promise<HTMLDataItem[] | null> => {
  try {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      collection(database, collectionName)
    );

    const htmlDataArray: HTMLDataItem[] = [];

    querySnapshot.forEach((doc) => {
      const docData = doc.data();

      // Add each document as an item in the array
      htmlDataArray.push({
        title: docData.title || '',
        subTitle: docData.subTitle || '',
        description: docData.description || '',
        example: docData.example || '',
      });
    });

    return htmlDataArray;
  } catch (error) {
    console.error('Error fetching documents: ', error);
    return null;
  }
};
