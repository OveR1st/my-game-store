export default class AppService {

  _apiBase = 'https://167.172.186.154/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
  
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
    }
    return await res.json();
  }
 
  getAllProducts = async () => {
    const res = await this.getResource(`/products`);
    return res.result
      .map(this._transformProduct)
      .slice(0, 9)
  }
  
  _transformProduct = (product) => {
    return {
      id: product.id,
      name: product.name,
      src: product.img_url,
      category: product.category,
      price: product.price,
      discount: product.discount,
      created: product.created_at,
      updated: product.updated_at,
      deleted: deleted_at
    }
  }

}