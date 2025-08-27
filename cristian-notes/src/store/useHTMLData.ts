import {create} from 'zustand';
import {database} from '../firebase/setup';
import {
  collection,
  getDocs,
  QuerySnapshot,
  type DocumentData,
} from 'firebase/firestore';
import {devtools} from 'zustand/middleware';

type HTMLData = {
  title: string;
  subTitle: string;
  description: string;
  example: string;
  getHTMLData: () => Promise<void>;
  setHTMLData: (data: Partial<HTMLData>) => void;
};

export const useHTMLData = create<HTMLData>()(
  devtools((set) => ({
    title: '',
    subTitle: '',
    description: '',
    example: '',
    getHTMLData: async () => {
      console.log('getHTMLData');
      const data = await getHTMLData('html');
      if (data) {
        set({
          title: data.title,
          subTitle: data.subTitle,
          description: data.description,
          example: data.example,
        });
      }
    },
    setHTMLData: (data: Partial<HTMLData>) => set(data),
  }))
);

const getHTMLData = async (collectionName: string) => {
  console.log('ITEM', collectionName);
  try {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      collection(database, collectionName)
    );

    // Assuming we want the first document or combine all documents
    let htmlData = {
      title: '',
      subTitle: '',
      description: '',
      example: '',
    };

    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      console.log(doc.id, ' => ', docData);

      // Merge data from the document
      htmlData = {
        title: docData.title || htmlData.title,
        subTitle: docData.subTitle || htmlData.subTitle,
        description: docData.description || htmlData.description,
        example: docData.example || htmlData.example,
      };
    });

    return htmlData;
  } catch (error) {
    console.error('Error fetching documents: ', error);
    return null;
  }
};
