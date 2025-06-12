// Données de test (exemple : liste de produits)
const products = [
  { id: 1, name: "Baobab", category: "Artisanat en bois" },
  { id: 2, name: "Panier en raphia", category: "Vannerie" },
  { id: 3, name: "Couture malagasy", category: "Textile" },
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", function(e) {
  const query = e.target.value.toLowerCase();
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query)
  );

  // Afficher les résultats
  if (query.length > 0) {
    searchResults.innerHTML = filteredProducts.map(product => `
      <div class="result-item">
        <h4>${product.name}</h4>
        <p>Catégorie : ${product.category}</p>
      </div>
    `).join("");
    searchResults.style.display = "block";
  } else {
    searchResults.style.display = "none";
  }
});