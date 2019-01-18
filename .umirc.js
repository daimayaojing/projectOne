
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer:true
      },
      dynamicImport: false,
      title: 'umi-react-dva',
      dll: false,
      routes: {
        exclude: [
        
          /components\//,
        ],
      },
    }],
  ],
}
