import {create} from 'zustand';
import {database} from '../firebase/setup';
import {
  collection,
  getDocs,
  QuerySnapshot,
  type DocumentData,
} from 'firebase/firestore';
import {devtools} from 'zustand/middleware';

export type HTMLDataItem = {
  title: string;
  subTitle: string;
  description: string;
  example: string;
};

type HTMLData = {
  data: HTMLDataItem[];
  getHTMLData: () => Promise<void>;
  setHTMLData: (data: HTMLDataItem[]) => void;
};

export const useHTMLData = create<HTMLData>()(
  devtools((set) => ({
    data: [],
    getHTMLData: async () => {
      console.log('getHTMLData');
      const data = await getHTMLData('html');
      if (data) {
        set({
          data: data,
        });
      }
    },
    setHTMLData: (data: HTMLDataItem[]) => set({data}),
  }))
);

const getHTMLData = async (collectionName: string) => {
  console.log('ITEM', collectionName);
  try {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      collection(database, collectionName)
    );

    const htmlDataArray: HTMLDataItem[] = [];

    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      console.log(doc.id, ' => ', docData);

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
