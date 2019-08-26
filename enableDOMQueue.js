document.addEventListener("DOMContentLoaded", () => {

  let ordering = document.querySelector("#ordering");

  let h2heading = document.createElement("h2");
  h2heading.innerText = "Customer Information";
  ordering.appendChild(h2heading);

  let orderForm = document.createElement("form");
  ordering.appendChild(orderForm);

  let firstNameLabel = document.createElement("label");
  firstNameLabel.setAttribute("for", "first-name");
  firstNameLabel.innerText = "First Name";
  let firstNameInput = document.createElement("input");
  firstNameInput.setAttribute("type", "text");
  firstNameInput.setAttribute("id", "first-name");
  orderForm.appendChild(firstNameLabel);
  orderForm.appendChild(firstNameInput);

  let br1 = document.createElement("br");
  orderForm.appendChild(br1);
  
  let lastNameLabel = document.createElement("label");
  lastNameLabel.setAttribute("for", "last-name");
  lastNameLabel.innerText = "Last Name";
  let lastNameInput = document.createElement("input");
  lastNameInput.setAttribute("type", "text");
  lastNameInput.setAttribute("id", "last-name");
  orderForm.appendChild(lastNameLabel);
  orderForm.appendChild(lastNameInput);

  let br2 = document.createElement("br");
  orderForm.appendChild(br2);

  let addressLabel = document.createElement("label");
  addressLabel.setAttribute("for", "address");
  addressLabel.innerText = "Address";
  let addressInput = document.createElement("input");
  addressInput.setAttribute("type", "text");
  addressInput.setAttribute("id", "address");
  addressInput.setAttribute("size", "60")
  orderForm.appendChild(addressLabel);
  orderForm.appendChild(addressInput);

  let newHeading = document.createElement("h2");
  newHeading.innerText = "Build Your Pizza";
  orderForm.appendChild(newHeading);

  let sizeLabel = document.createElement("label");
  sizeLabel.setAttribute("for", "pizza-size");
  sizeLabel.innerText = "Pie Size";
  orderForm.appendChild(sizeLabel);

  let br3 = document.createElement("br");
  orderForm.appendChild(br3);


  let small = document.createElement("input");
  small.setAttribute("type", "radio");
  small.setAttribute("id", "sm");
  small.setAttribute("name", "size");
  small.setAttribute("value", "small");
  let smallLabel = document.createElement("label");
  smallLabel.setAttribute("for", "sm");
  smallLabel.innerText = "Small ";
  orderForm.appendChild(small);
  orderForm.appendChild(smallLabel);

  let medium = document.createElement("input");
  medium.setAttribute("type", "radio");
  medium.setAttribute("id", "md");
  medium.setAttribute("name", "size");
  medium.setAttribute("value", "medium");
  let mediumLabel = document.createElement("label");
  mediumLabel.setAttribute("for", "md");
  mediumLabel.innerText = "Medium ";
  orderForm.appendChild(medium);
  orderForm.appendChild(mediumLabel);

  let large = document.createElement("input");
  large.setAttribute("type", "radio");
  large.setAttribute("id", "lg");
  large.setAttribute("name", "size");
  large.setAttribute("value", "large");
  let largeLabel = document.createElement("label");
  largeLabel.setAttribute("for", "lg");
  largeLabel.innerText = "large ";
  orderForm.appendChild(large);
  orderForm.appendChild(largeLabel);
  
  let br4 = document.createElement("br");
  orderForm.appendChild(br4);

  let crustLabel = document.createElement("label");
  crustLabel.setAttribute("for", "pizza-crust");
  crustLabel.innerText = "Pie crust : ";
  orderForm.appendChild(crustLabel);

  let crust = document.createElement("select");
  orderForm.appendChild(crust);
  let op1 = document.createElement("option");
  op1.value = "any";
  op1.innerText = "Any";
  crust.appendChild(op1);
  let op2 = document.createElement("option");
  op2.value = "thin";
  op2.innerText = "Thin";
  crust.appendChild(op2);
  let op3 = document.createElement("option");
  op3.value = "thick";
  op3.innerText = "Thick";
  crust.appendChild(op3);

  let br5 = document.createElement("br");
  orderForm.appendChild(br5);

  let toppings = document.createElement("label");
  toppings.setAttribute("for", "toppings");
  toppings.innerText = "Toppings : ";
  orderForm.appendChild(toppings);

  let anchovies = document.createElement("input");
  anchovies.type = "checkbox";
  anchovies.value = "1";
  anchovies.id = "anchovies-topping";
  anchovies.name = "Anchovies";
  anchovies.setAttribute("class", "top");
  orderForm.appendChild(anchovies);
  let anchoviesLabel = document.createElement("label");
  anchoviesLabel.setAttribute("for", "anchovies-topping");
  anchoviesLabel.innerText = "Anchovies ";
  orderForm.appendChild(anchoviesLabel);

  let ham = document.createElement("input");
  ham.type = "checkbox";
  ham.value = "2";
  ham.id = "ham-topping";
  ham.name = "Ham";
  ham.setAttribute("class", "top");
  orderForm.appendChild(ham);
  let hamLabel = document.createElement("label");
  hamLabel.setAttribute("for", "ham-topping");
  hamLabel.innerText = "Ham ";
  orderForm.appendChild(hamLabel);

  let pepperoni = document.createElement("input");
  pepperoni.type = "checkbox";
  pepperoni.value = "3";
  pepperoni.id = "pepperoni-topping";
  pepperoni.name = "Pepperoni";
  pepperoni.setAttribute("class", "top");
  orderForm.appendChild(pepperoni);
  let pepperoniLabel = document.createElement("label");
  pepperoniLabel.setAttribute("for", "pepperoni-topping");
  pepperoniLabel.innerText = "Pepperoni ";
  orderForm.appendChild(pepperoniLabel);

  let saussage = document.createElement("input");
  saussage.type = "checkbox";
  saussage.value = "4";
  saussage.id = "saussage-topping";
  saussage.name = "Saussage";
  saussage.setAttribute("class", "top");
  orderForm.appendChild(saussage);
  let saussageLabel = document.createElement("label");
  saussageLabel.setAttribute("for", "saussage-topping");
  saussageLabel.innerText = "Saussage ";
  orderForm.appendChild(saussageLabel);

  let broccoli = document.createElement("input");
  broccoli.type = "checkbox";
  broccoli.value = "5";
  broccoli.id = "broccoli-topping";
  broccoli.name = "Broccoli";
  broccoli.setAttribute("class", "top");
  orderForm.appendChild(broccoli);
  let broccoliLabel = document.createElement("label");
  broccoliLabel.setAttribute("for", "broccoli-topping");
  broccoliLabel.innerText = "Broccoli ";
  orderForm.appendChild(broccoliLabel);

  let greenOlives = document.createElement("input");
  greenOlives.type = "checkbox";
  greenOlives.value = "6";
  greenOlives.id = "greenOlives-topping";
  greenOlives.name = "Green-Olives";
  greenOlives.setAttribute("class", "top");
  orderForm.appendChild(greenOlives);
  let greenOlivesLabel = document.createElement("label");
  greenOlivesLabel.setAttribute("for", "greenOlives-topping");
  greenOlivesLabel.innerText = "Green Olives ";
  orderForm.appendChild(greenOlivesLabel);

  let mushrooms = document.createElement("input");
  mushrooms.type = "checkbox";
  mushrooms.value = "7";
  mushrooms.id = "mushrooms-topping";
  mushrooms.name = "Mushrooms";
  mushrooms.setAttribute("class", "top");
  orderForm.appendChild(mushrooms);
  let mushroomsLabel = document.createElement("label");
  mushroomsLabel.setAttribute("for", "mushrooms-topping");
  mushroomsLabel.innerText = "Mushrooms ";
  orderForm.appendChild(mushroomsLabel);

  let roastedGarlic = document.createElement("input");
  roastedGarlic.type = "checkbox";
  roastedGarlic.value = "8";
  roastedGarlic.id = "roastedGarlic-topping";
  roastedGarlic.name = "Roasted-Garlic";
  roastedGarlic.setAttribute("class", "top");
  orderForm.appendChild(roastedGarlic);
  let roastedGarlicLabel = document.createElement("label");
  roastedGarlicLabel.setAttribute("for", "roastedGarlic-topping");
  roastedGarlicLabel.innerText = "Roasted Garlic ";
  orderForm.appendChild(roastedGarlicLabel);

  let br6 = document.createElement("br");
  orderForm.appendChild(br6);

  let specialIstrucutionsLabel = document.createElement("label");
  specialIstrucutionsLabel.setAttribute("for", "sp-instructions");
  specialIstrucutionsLabel.innerText = "Special Instructions : ";
  orderForm.appendChild(specialIstrucutionsLabel);
  let br7 = document.createElement("br");
  orderForm.appendChild(br7);
  let textArea = document.createElement("textarea");
  textArea.setAttribute("name", "special-instructions");
  textArea.setAttribute("id", "sp-instructions");
  textArea.setAttribute("cols", "50");
  textArea.setAttribute("rows", "5");
  orderForm.appendChild(textArea)

  let br8 = document.createElement("br");
  orderForm.appendChild(br8);

  let submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "enqueue");
  submitButton.setAttribute("value", "Submit Order");
  orderForm.appendChild(submitButton);

  /////////////////////////////////////////////////////////////////////////////

  class Queue {
      constructor (first_name, last_name, address, size, crust, topping, special_instructions) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
        this.size = size;
        this.crust = crust;
        this.topping = topping;
        this.special_instructions = special_instructions;
      }
    enqueue() {
      let li = document.createElement("li");
      li.innerText = `${this.size}, ${this.crust}, ${this.topping}, ${this.special_instructions}`
      list.appendChild(li);
    }
    dequeue() {
      let firstChild = list.firstChild;
      list.removeChild(firstChild);
    }
    peek() {
      let allOrders = document.querySelectorAll("li");
      return allOrders[0];
    }
    isEmpty() {
      let allOrders = document.querySelectorAll("li");
      return allOrders.length === 0;
    }
  }

  let list = document.querySelector("ol");


  /////////////////////////////////////////////////////////////////////////////
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let orderAddress = addressInput.value;
    if (!firstName || !lastName || !orderAddress){
      window.alert("INVALID INPUT\nPlease double check customer information, all fields are mandatory");
    }

    let pieSize;
    if (small.checked) {
      pieSize = "small";
    } else if (medium.checked) {
      pieSize = "medium";
    } else if (large.checked) {
      pieSize = "large"
    } else {
      window.alert("INVALID INPUT\nPlease select your pizza size");
    }

    let pieCrust = crust.value;

    let toppingsList = [];
    let topps = document.querySelectorAll(".top");
    console.log(topps)
    for (let i = 0; i < topps.length; i++) {
      console.log("Lookink for this", topps[i].checked)
      if (topps[i].checked) {
        toppingsList.push(topps[i].value);
      }
    }
    console.log(toppingsList)

    let instructions = textArea.value;
  
    let order = new Queue(firstName, lastName, orderAddress, pieSize, pieCrust, toppingsList, instructions)

    order.enqueue()
  })

  /////////////////////////////////////////////////////////////////////////////
  let removeOrderButton = document.querySelector("#dequeue_btn");
  removeOrderButton.addEventListener("click", (event) => {
    event.preventDefault();

    let removeOrder = new Queue();
    removeOrder.dequeue();
  })

})


// const enableDOMQueue = (queue) => {
//   let originalEnqueue = queue.enqueue;
//   let originalDequeue = queue.dequeue;
//   let list = document.querySelector("ol");

//   queue.enqueue = (value) => {
//     originalEnqueue.call(queue, value); // CALL
//     let li = document.createElement("li");
//     let { crust, size, topping, special_instructions } = value
//     li.innerText = `${size}, ${crust}, ${topping}, ${special_instructions}`
//     list.appendChild(li)
//   }

//   queue.dequeue = () => {
//     originalDequeue.call(queue); // CALL
//     let firstChild = list.firstChild;
//     list.removeChild(firstChild)
//   }
// }
