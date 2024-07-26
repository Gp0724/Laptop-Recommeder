// Replace "YOUR_API_KEY" with your actual Gemini API key
const API_KEY = "YOUR GEMINI API KEY";

const submitButton = document.getElementById("submit-btn");
const purposeInput = document.getElementById("purpose");
const ramInput = document.getElementById("ram");
const storageInput = document.getElementById("storage");
const descInput = document.getElementById("desc");
const adOutput = document.getElementById("ad-output");

submitButton.addEventListener("click", async () => {
  // Get user inputs
  const purpose = purposeInput.value;
  const ram = ramInput.value;
  const storage = storageInput.value;
  const description = descInput.value;

  // Clear previous output
  adOutput.innerHTML = "";

  // Construct user prompt
  let prompt = `Only give Names of 5 Laptops which are good for ${purpose}. It should have ${ram} of RAM and ${storage} of storage. The user describes their usage as: ${description}`;

  // Call Gemini API to generate creative text
  const response1 = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{
            
            role: "user",
            parts: [{
                text: prompt,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response1.json();

  // Extract generated text and display it
  const generatedText = data.candidates[0].content.parts[0].text.replace("**"," ");
  adOutput.innerHTML = `<h4>Laptop Recommendations !</h4><p>${generatedText}</p>`;
  adOutput.style.display = "block";

  // Construct user prompt
  let prompt2 = `Give a medium Description about these Laptops ${generatedText}`;

  // Call Gemini API to generate creative text
  const response2 = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{
            
            role: "user",
            parts: [{
                text: prompt2,
              },
            ],
          },
        ],
      }),
    }
  );

  const data2 = await response2.json();

  // Extract generated text and display it
  const generatedText2 = data2.candidates[0].content.parts[0].text.replace("**","");
  adOutput.innerHTML = `<h3>Laptop Recommendations !</h3><p>${generatedText}</p>`;
  adOutput.style.display = "block";

  const newHeading = document.createElement('h3');
  
  // Set the text content of the new h4 element
  newHeading.textContent = 'Description';

  const newParagraph = document.createElement('p');
  newParagraph.textContent = generatedText2;

  // Select the section element
  const section = document.getElementById('ad-output');
  
  // Append the new h4 element to the section
  section.appendChild(newHeading);

  section.appendChild(newParagraph);

  // Optionally, make the section visible
  section.style.display = 'block';


  // Construct user prompt
  let prompt3 = `Dont give response as Impossible to Rank, Just Give General Ranking of these Laptops ${generatedText}`;

  // Call Gemini API to generate creative text
  const response3 = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{
            
            role: "user",
            parts: [{
                text: prompt3,
              },
            ],
          },
        ],
      }),
    }
  );

  const data3 = await response3.json();

  // Extract generated text and display it
  const generatedText3 = data3.candidates[0].content.parts[0].text.replace("**","");
  adOutput.style.display = "block";

  const newHeading2 = document.createElement('h2');
  
  // Set the text content of the new h4 element
  newHeading2.textContent = 'Ranking';

  const newParagraph1 = document.createElement('p');
  newParagraph1.textContent = generatedText3;

  // Select the section element
  const section1 = document.getElementById('ad-output');
  
  // Append the new h4 element to the section
  section1.appendChild(newHeading2);

  section1.appendChild(newParagraph1);

  // Optionally, make the section visible
  section.style.display = 'block';






});
