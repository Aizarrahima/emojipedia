import React from "react";
import Card from "./Card";
import emojis from "../emojipedia"

function createCard(emoji) {
    return (
        <Card
            id={emoji.id}
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            description={emoji.meaning}
        />
    )
}

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">{emojis.map(createCard)}</dl>
        </div>
    );
}

export default App;