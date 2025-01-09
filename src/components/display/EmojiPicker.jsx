import React from "react";
import Picker from "emoji-picker-react";

export default function EmojiPicker({ onEmojiClick }) {

    return (
        <div>
            <Picker 
                onEmojiClick={onEmojiClick}
                reactionsDefaultOpen={true}
            />
        </div>
    );
};