import {useState} from "react";
import visibility from "../components/SocialPosts";
import "./PostForm.css";

export default function PostForm({
    setTitle,
    setThought,
    onSubmit,
    
}: {
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setThought: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: () => void;
}) {
    
    
   
    // const [hiddenClass, setHiddenClass] = useState("not-hidden");
    return (
        <div className="modal">
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}>
                <div className="close-icon">
                    <i className="fas fa-times-circle"></i>
                </div>
                <div className="form__section">
                    <label htmlFor="title">Title
                        <input required aria-label="title" name="title" id="title" type="text" placeholder="Enter a title" 
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                        />
                    </label>
                </div>
                <div className="form__section">
                    <label htmlFor="thought">Thought
                        <textarea required rows={10} aria-label="thought" name="thought" id="thought" placeholder="Enter a thought"
                        onChange={(event) => {
                            setThought(event.target.value);
                        }}
                        ></textarea>
                    </label>
                </div>
                <div className="form__section">
                    <button type="submit">Add Post</button>
                </div>
            </form>
        </div>

    )
};