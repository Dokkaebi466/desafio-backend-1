class ProductManager {
    products;
    constructor() {
      this.products = [];
    }
    static correlativoId = 0;
    addProduct(title, description, price, thumbnail, code, stock) {
      //id: this.products.length +1,
  
      if (
        title == undefined ||
        description == undefined ||
        price == undefined ||
        thumbnail == undefined ||
        code == undefined ||
        stock == undefined
      ) {
        throw new Error("Todos los campos son obligatorios");
      }
      let codeExists = this.products.some((dato) => dato.code == code);
  
      if (codeExists) {
        throw new Error("El codigo ya existe por favor verifique");
      } else {
        ProductManager.correlativoId++;
        const newProduct = {
          id: ProductManager.correlativoId,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        };
        this.products.push(newProduct);
      }
  
      // if () {
  
      // }
    }
    getProducts() {
      return this.products;
    }
    getProductById(id) {
      let product = this.products.find((dato) => dato.id === id);
  
      if (product !== undefined) {
        return product;
      } else {
        return "no existe el producto solicitado";
      }
    }
  }
  
  const myFirstProducts = new ProductManager();

// Llama al método addProduct en la instancia
myFirstProducts.addProduct(
  "concierto taylor swift",
  "tickets para concierto de taylor swift",
  200000,
  "sin imagen",
  "abc123",
  25
);

// Imprime el resultado
console.log("desde getProducts", myFirstProducts.getProducts());
console.log("desde getProducts", myFirstProducts.getProducts(1));
  
  //console.log("mi producto filtrado  por id", myFirstPRoducts.getProductById(2)); // ok
  //console.log("mi producto filtrado  por id", myFirstPRoducts.getProductById(5)); // error