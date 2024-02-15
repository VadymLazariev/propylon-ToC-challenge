import axios from "axios";
import { Chapter } from "../types";

export const getDocumentsStructure = async (): Promise<Chapter[]> => {
  try {
    return await axios.get("/data");
  } catch (error) {
    throw new Error("Could not get document structure");
  }
};
