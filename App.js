const heading = React.createElement(
    'h1',
    { id: 'heading' },
    'Hello React From Other file'
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
