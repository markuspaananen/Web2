let selectedCustomer = null;

const form = document.getElementById("form");

function fillForm(customer) {
  document.getElementById("first_name").value = customer.first_name || "";
  document.getElementById("last_name").value = customer.last_name || "";
  document.getElementById("email").value = customer.email || "";
  document.getElementById("phone").value = customer.phone || "";
  document.getElementById("birth_date").value = customer.birth_date || "";
}

function clearForm() {
  form.reset();
  selectedCustomer = null;
}

async function loadCustomers() {
  const container = document.getElementById("customer-list");

  try {
    const res = await fetch("/api/persons");
    const data = await res.json();

    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = "<p>No customers found.</p>";
      return;
    }

    data.forEach(person => {
      const div = document.createElement("div");
      div.className = "customer-card";

      div.innerHTML = `
        <strong>${person.first_name} ${person.last_name}</strong><br>
        Email: ${person.email}<br>
        Phone: ${person.phone || "-"}
      `;

      div.addEventListener("click", () => {
        selectedCustomer = person;
        fillForm(person);
      });

      container.appendChild(div);
    });

  } catch (err) {
    console.error(err);
  }
}

// CREATE or UPDATE
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const customerData = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    birth_date: document.getElementById("birth_date").value
  };

  try {
    if (selectedCustomer) {
      // UPDATE
      await fetch(`/api/persons/${selectedCustomer.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customerData)
      });
    } else {
      // CREATE
      await fetch("/api/persons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customerData)
      });
    }

    clearForm();
    loadCustomers();

  } catch (err) {
    console.error(err);
  }
});

// DELETE
document.getElementById("deleteBtn").addEventListener("click", async () => {
  if (!selectedCustomer) return;

  try {
    await fetch(`/api/persons/${selectedCustomer.id}`, {
      method: "DELETE"
    });

    clearForm();
    loadCustomers();

  } catch (err) {
    console.error(err);
  }
});

// CLEAR FORM
document.getElementById("clearBtn").addEventListener("click", clearForm);

// Init
loadCustomers();