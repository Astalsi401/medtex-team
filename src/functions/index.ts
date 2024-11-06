import { TeamInfo } from "@types";

class FetchData {
  errorHandler: (error: Error) => void;
  fetchWrapper: (url: string, options?: RequestInit) => Promise<any>;
  get: (url: string) => Promise<any>;
  post: (url: string, data?: any) => Promise<any>;
  constructor() {
    this.errorHandler = (error) => {
      throw error;
    };
    this.fetchWrapper = (url, options) =>
      fetch(url, options)
        .then((res) => res.json())
        .catch(this.errorHandler);
    this.get = (url: string) => this.fetchWrapper(url);
    this.post = (url: string, data = {}) => this.fetchWrapper(url, { method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" }, body: JSON.stringify(data) });
  }
}
export const fetchData = new FetchData();
export const getTeamInfo: (teamId: string, lang: string) => Promise<TeamInfo> = async (teamId, lang) => (window.location.hostname === "localhost" ? await fetchData.get(`/json/${teamId}-${lang}.json`) : await fetchData.get(`https://api.taiwan-healthcare.org/api/v1/team/${teamId}?lang=${lang}`));
export const getSearchParam = (name: string) => new URLSearchParams(window.location.search).get(name);