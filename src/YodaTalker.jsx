import React,{useState, useCallback} from "react";
import axios from "axios";

const YodaTalker = () => {

 

    const [message, setMessage] = useState("");
    const [output, setOutput] = useState("");

    const handleSubmit = useCallback(async () => {
          await axios.post('https://yodish.p.rapidapi.com/yoda.json',
          {text:message}, 
          {headers: {
            'X-RapidAPI-Key': '42e586bb78mshc1517a4ab8a0976p1b6533jsn7bf3b50f2466',
            'X-RapidAPI-Host': 'yodish.p.rapidapi.com'
            }}
          )
          .then(response => {
            const { translated } = response.data.contents;
            setOutput(translated);
          }).catch(error => {
            setOutput(error);
          })

    },[message]);

    const handleChange = event => {
        console.log(`text changed: ${event.target.value}`);
        event.preventDefault();
        setMessage(event.target.value);
    };

    return (
        <div>
            <h1>
                Yoda Talker
            </h1>
                <lablel>
                    <div>
                        <textarea
                            type="text"
                            placeholder="Enter Message"
                            onChange={handleChange}
                        />    
                    </div> 
                </lablel>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            <div>
                <h3>Yoda Says</h3>
                <textarea value={output} />
            </div>
        </div>
    );
}

export default YodaTalker;