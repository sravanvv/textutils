import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
export default function Textform(props) {
  const navigate=useNavigate(); 
  function countVowelsAndConsonants(text) {
    text = text.toString().toLowerCase();
    let vowelCount = 0;
    let consonantCount = 0;
    for (let char of text) {
      if (/[aeiou]/.test(char)) { 
        vowelCount++;
      } else if (char.match(/[a-z]/)) { 
        consonantCount++;
      }
    }
    return {
      vowels: vowelCount,
      consonants: consonantCount
    };
  }
    const [text,setText]=useState('Enter text here');
    const [results, setResults] = useState(text);
    
    //UpperCase
   const handleupclick =()=>{
let newText=text.toUpperCase();
setText(newText); 
   }
   //Lowercase 
   const handleupclick1 = () => {
     let newText = text.toLowerCase();
     setText(newText);
   };
   //clear Text
   const handleupclick3 = () => {
    let newText = '';
    setText(newText);
  
  };
   //Initcase
   const handleupclick2 = () => {
    function initCase(text) {
      return text.toLowerCase().replace(/(^|\s)\S/g, function (firstLetter) {
        return firstLetter.toUpperCase();
      });
    }
     let newText =initCase(text);
     setText(newText);
   }
   const handleonChange = (event) => {
     setText(event.target.value);
     //setText(event.target.value);
     const newResults = countVowelsAndConsonants(text);
     setResults(newResults);
   };
   const handleCopy = () => {
     let text = document.getElementById("ta");
     text.select();
     navigator.clipboard.writeText(text.value);
   };
const handleSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
};

const handleRemoveSpecialCharacters = () => {
  let newText = text.replace(/[^a-zA-Z0-9 ]/g, '');
     setText(newText);
};

const handleExtractNumbers = () => {
  const digits = text.match(/[0-9]/g);
  if (digits === null) {
   let newText= '';
    setText(newText);
  } else {
    let newText= digits.join('');
    setText(newText);
  }
};
  return (
    <div>
      <div className='box'>
      <h3 className='mx-3 my-1'>Enter the text that you want to convert:</h3>
<div className="mb-3">
<textarea className="form-control mx-2 my-1" id="ta" rows="10" value={text} onChange={handleonChange} ></textarea>
  <button className='btn btn-primary mx-2 my-1' onClick={handleupclick} id='UppButton'>Convert to UpperCase</button>
  <button className='btn btn-secondary mx-2 my-1' onClick={handleupclick1} id='LowButton'>Convert to LowerCase</button> 
  <button className='btn btn-warning mx-2 my-1' onClick={handleupclick2} id='InitButton'>Convert to InitCase</button>
  <button className='btn btn-info mx-2 my-1' onClick={handleupclick3} id='ClearButton'>Clear Text</button>
  <button className='btn btn-primary mx-2 my-1' onClick={handleSpaces} id='SpaceButton'>Clear Extra Spaces</button>
  <button className='btn btn-success mx-2 my-1' onClick={handleCopy} id='CopyButton'>Copy Text</button>
  <button className='btn btn-info mx-2 my-1' onClick={handleRemoveSpecialCharacters} id='ClearButton'>Remove Special Characters</button>
  <button className='btn btn-secondary mx-2 my-1' onClick={handleExtractNumbers} id='ClearButton'>Extract Numbers</button>

</div>
<div className='mx-3 my-1'>
<h2 >Your Text Summary</h2>
<p id="word">{text.split(" ").length} words and {text.length} characters. Number of vowels in the given input text 
are {results.vowels} and number of consonants are {results.consonants}.
</p>
<h4>Text Preview</h4>
<p>{text.length>0 ?text:"Enter the text above to preview it here !!"}</p>
</div>
</div>
<footer>
            <div className='textfooter'>
           <p id='abfop'> @ Text Utilis Website @ </p>
           <a  id='abfopnav' onClick={()=> {
          navigate("/");}} >Home</a>
          <a id='abfopnav' onClick={()=> {
          navigate("/about");
        }}>About</a>
            <p id='abfop'>Made by Sravan </p>
            </div>
        </footer>
        <script></script>
    </div>
  )
}
