import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants';
import {createPost} from "../../services/postService";




function NewPostForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = { title, body };

        try {
            const response = await createPost(postData);
            navigate(`/posts/${response.id}`);
        } catch (e) {
            console.error("Failed to create post:", e);
        }
    };

    return (
        <div>
            <h1>New Post Form Temp</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlform="titleInput">Title:</label>
                <input
                    id="titleInput"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                </div>
                <div>
                    <label htmlFor="bodyInput">Body:</label>
                    <textarea
                        id="bodyInput"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Create Post</button>
                </div>
            </form>
        </div>
    )
}

export default NewPostForm;