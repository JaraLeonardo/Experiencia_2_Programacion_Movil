  export interface RespuestaTopHeadlines {
    status: string;
    totalResults: number;
    articles: Article[];
  }
  
  export interface Article {
    nombre: string;
    comentarios: string;
    fecha: string;
    irrenunciable: boolean;
    tipo: string;
  }
  
  export interface Source {
    id?: string;
    name: string;
  }

  

