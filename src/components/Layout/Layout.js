import React from 'react'; 

const layout = (props) => (
    <div>
        <div>Toolbar,SideDrawer,Backgrop</div>
        <main>
        {props.children}
        </main>
    </div>
);