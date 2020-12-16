import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID MdLePz5UxtaEfigYgoGOE_kRRcyVaj1CVkcL7nQzFvY',
  }
});