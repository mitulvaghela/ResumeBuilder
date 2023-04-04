import { createTag,emptyFormData, getData,previewEditRemove,createPreviewContainer,previewBlockParentSuffixId,resumeBlockSuffixId ,removeButtonSuffixId,editButtonSuffixId,buttonType,removeContainer } from "./interactive.js";
import { previewBlockDOM } from "./interactive.js";



// function EducationPreviewEditRemoveFeatures (event) {

//     event.preventDefault();
//     const currentEvent = event.target.innerHTML;
//     const currentEventId =  (event.target.id).slice(0,-1);
//     const parentId = currentEventId + previewBlockParentSuffixId;
//     const educationStoreData= getData('educationData');
//     const currentData = educationStoreData[currentEventId];
    
// // for many buttons : do it without condition
//     switch (currentEvent) {
//         case buttonType.remove:
//             removeContainer(event);
//             break;

//         case buttonType.edit:
//             for( let key in currentData){
//                 document.getElementById(`${key}`).value = currentData[key];
//             }
//             removeContainer(event);
//             // removeData  -> change in model via controller 
//     }
    
//     delete educationStoreData[currentEventId];
//     localStorage.setItem('educationData',JSON.stringify(educationStoreData));
// }

export function addEducationPart(currentData,currentId,currentSection) {
    let educationStoreData= getData(`${currentSection}`)
      console.log(educationStoreData);
    //  saveEducationData();
    let educationDetails = document.getElementById("education-details");
    let previewEducationBlock = createTag("div");
  
//    console.log(currentData);
     console.log(currentData);

            const universityNameBlock = createTag("h4");
            const yearOfEducationBlock = createTag("span");  
            const courseNameBlock = createTag("p");
            const currentEducationBlock = createTag("div");

            currentEducationBlock.classList.add("content-title");
            universityNameBlock.classList.add("content-item");
            yearOfEducationBlock.classList.add("content-item");
            yearOfEducationBlock.classList.add("extreme-right-item");
            courseNameBlock.classList.add("content-item");


            universityNameBlock.innerHTML = currentData.qname + " - " + currentData.uname;
            yearOfEducationBlock.innerHTML = currentData.syear+ " - " + currentData.eyear;
            courseNameBlock.innerHTML = currentData.cname;

            currentEducationBlock.appendChild(universityNameBlock);
            currentEducationBlock.appendChild(yearOfEducationBlock);
            currentEducationBlock.appendChild(courseNameBlock);
            educationDetails.appendChild(currentEducationBlock);

            createPreviewContainer(previewEducationBlock,currentEducationBlock,currentId,currentSection);

            
            // console.log(previewEducationBlock);
            // console.log(previewEducationFormContainer);
            previewBlockDOM[`${currentSection}`].appendChild(previewEducationBlock);

            previewEducationBlock.addEventListener("click", (event)=> { 
                // EducationPreviewEditRemoveFeatures(event);
                previewEditRemove(event,currentSection);
            })
     
  
    // ValidationCheckerEachTime();
}

function onEducationSubmit(currentEducationItem,currentSection) {
        
    console.log(currentEducationItem);
    // const educationSubmitButton = document.getElementById("education-submit");
    
    // educationSubmitButton.addEventListener("click", (event)=> {
        console.log(currentEducationItem);
        console.log("education submit button has been clicked");
        const currentId = Date.now() + Math.random().toString(16).slice(2);
        let educationStoreData =  getData(`${currentSection}`);
        if(!educationStoreData)
        educationStoreData={};
        // console.log(educationStoreData);  
        educationStoreData[currentId] = currentEducationItem;
        // console.log(educationStoreData);
        localStorage.setItem(`${currentSection}`,JSON.stringify(educationStoreData));
        if(!currentEducationItem)
        return;
        addEducationPart(currentEducationItem,currentId,currentSection);
        emptyFormData(`${currentSection}`);
    // })

}

export { onEducationSubmit}
