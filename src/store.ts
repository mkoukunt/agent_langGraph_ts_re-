export interface AgentStore {
    apiHost: string;
    accessToken: string
    qn: string,
    ans:{
    mac: string;
    brand: string;
    model: string;
    results: any[];
  },
  search:[ {
    mac: string;
    brand: string;
    model: string;
    results: any[];
  }]
}