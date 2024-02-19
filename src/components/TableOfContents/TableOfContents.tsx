import { useGetDocumentStructure } from "../../hooks/useGetDocumentStructure";

import { Navigation } from "../Navigation/Navigation";
import { ContentView } from "../ContentView/ContentView";
import { ChapterProvider } from "../../context/ChapterContext";
import {Loader} from "../shared/Loader/Loader";
import {Error} from "../shared/Error/Error";

import styles from "./TableOfContents.module.scss";


export const TableOfContents = () => {
  const { data: chapters, isError, isLoading } = useGetDocumentStructure();

  if (isLoading) {
    return <Loader/>
  }

  if (isError) {
    return <Error/>;
  }

  return (
    <ChapterProvider>
      <div className={styles.tableOfContents}>
        <div className={styles.navigation}>
          <Navigation chapters={chapters || []} />
        </div>
        <div className={styles.contentView}>
          <ContentView chapters={chapters}/>
        </div>
      </div>
    </ChapterProvider>
  );
};
