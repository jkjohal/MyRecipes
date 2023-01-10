const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#recipe-name').value.trim();
  const calories = document.querySelector('#recipe-calories').value.trim();
  const description = document.querySelector('#recipe-desc').value.trim();
  const ingredients = document.querySelector('#recipe-ingredients').value.trim();


  console.log(name)
  console.log(calories)
  console.log(description)
  console.log(ingredients)


  if (name && calories && description && ingredients) {
    const response = await fetch(`/api/recipe`, {
      method: 'POST',
      body: JSON.stringify({ name, calories, description , ingredients }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/recipe/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete recipe');
    }
  }
};

var now = dayjs()

function showCurrentDate(){
  const currentDate = document.getElementById("current-date")
  currentDate.textContent = "It is currently " + now
};

document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.recipe-list')
  .addEventListener('click', delButtonHandler);

showCurrentDate()
