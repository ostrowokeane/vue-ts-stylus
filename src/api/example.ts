import { AxiosPromise } from "axios";
import axios from "../axios";
import { downloadFile, getImgSrc } from "@/utils";

export default {
  getUsers: (): AxiosPromise<Record<string, unknown>[]> => axios.get("/users"),

  getUserAvatar: (id: number): Promise<string> =>
    axios
      .get(`/api/user/${id}/avatar`, { responseType: "blob" })
      .then(getImgSrc),

  downloadUserSecretsPdf: (id: number): Promise<void> =>
    axios
      .get(`/api/user/${id}/profile`, { responseType: "blob" })
      .then(downloadFile("user-profile.pdf")),
};
