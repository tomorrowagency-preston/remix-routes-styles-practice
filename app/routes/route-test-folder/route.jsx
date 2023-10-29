import styles from './route-folder-styles.css';

const Test = () => <h1>Folder Route Test</h1>

export default Test;

export function links() {
  return [
    { rel: "stylesheet", href: styles },
  ];
}

/*
the folder is the route path. This 'route.jsx' file ie required, similar to how an index.hmtl file is 
required with HTML. But in this case, adding route.jsx or even route.js will throw 404. The other files in 
the folder are ignored, in regards to the path.
*/