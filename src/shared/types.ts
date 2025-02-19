interface item {
  id: string;
  name: string;
}

interface god {
  id: string;
  name: string;
  otherName: string;
  type: string;
  managed: string;
  history: string;
  children: (string | item)[];
  parents: (string | item)[];
  spouse: (string | item)[];
}

interface legend {
  id: number;
  title: string;
  body: string;
  img?: string;
}

interface mythology {
  id: string;
  name: string;
  subtitle: string;
  gods: god[];
  legends: legend[];
}
