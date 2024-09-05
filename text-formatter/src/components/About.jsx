import {useNavigate} from 'react-router-dom';
export default function About(){
    const navigate=useNavigate(); 
    return <div>
        <h2 id="About">About Page</h2>

        <p id='abp'><strong>TextUtils</strong> is a ReactJs website built primarily to do various
        operations on regular typed text. You can safely use WordPad or NotePad
        for text drafting, and saving, but <i>TextUtils</i> offers much more
        than simple text drafting and formatting.</p>
        <ol id='abol'>
            <li>Converting to Uppercase</li>
            <li>Converting to Lowercase</li>
            <li>Converting to InitCase</li>
            <li>Clearing extra spaces</li>
            <li>Removal of special characters</li>
            <li>Extracting Numbers</li>
            <li>Length of the text and count of vowels and consonants</li>
        </ol>
        <footer>
            <div className='abfooter'>
           <p id='abfop'> @ Text Utlis Website @ </p>
           <a  id='abfopnav' onClick={()=> {
          navigate("/");}} >Home</a>
          <a id='abfopnav' onClick={()=> {
          navigate("/about");
        }}>About</a>
        <p id='abfop'>Made by Sravan </p>
            </div>
        </footer>
    </div>
}