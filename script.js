'use strict';
const person = [
  {
    name: "Andrew",
    lastname: "Selezen",
    city: "Dnepr",
    job: "Junior"
  },
  {
    name: "Vlad",
    lastname: "Dudkin",
    city: "Kyiv",
    job: "Middle"
  },
  {
    name: "Andrew",
    lastname: "Selezen",
    city: "Dnepr",
    job: "Junior"
  },
  {
    name: "Vlad",
    lastname: "Dudkin",
    city: "Kyiv",
    job: "Middle"
  },
  {
    name: "Andrew",
    lastname: "Selezen",
    city: "Dnepr",
    job: "Junior"
  },
  {
    name: "Vlad",
    lastname: "Dudkin",
    city: "Kyiv",
    job: "Middle"
  },
  {
    name: "Andrew",
    lastname: "Selezen",
    city: "Dnepr",
    job: "Junior"
  },
  {
    name: "Vlad",
    lastname: "Dudkin",
    city: "Kyiv",
    job: "Middle"
  },
  {
    name: "Igor",
    lastname: "Igorovich",
    city: "Kyiv",
    job: "Middle"
  }
]

const block = document.querySelector('.info')

function getInfoPersen(){
  person.forEach(item => {
    const html =`
      <div class="person_info">
        <h1>Name - ${item.name}</h1>
        <h2>Lastname - ${item.lastname}</h2>
        <h3>City - ${item.city}</h3>
        <p>Job - ${item.job}</p>
      </div>
      ` 
      block.insertAdjacentHTML('beforeend', html)
  })
}
getInfoPersen()



