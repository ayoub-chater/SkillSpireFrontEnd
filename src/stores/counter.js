import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken=true;
axios.defaults.baseURL = "http://localhost:8000";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    // authErrors: [],
    // authStatus: null,
  }),
  getters: {
    user: (state) => state.authUser,
    // errors: (state) => state.authErrors,
    // status: (state) => state.authStatus,
  },
  actions: {
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },
    async getUser() {
      await this.getToken();
      const response = await axios.get("/api/user");
      this.authUser = response.data;
      return this.authUser; 
  },
    async handleLogin(data) {
      // this.authErrors = [];
      await this.getToken();

      // try {
        await axios.post("/login", {
          email: data.email,
          password: data.password,
        });
        console.log(this.authUser)
        if (this.authUser.role === 'admin') {
          router.push("/admin");
        } else {
          router.push("/courses");
        }      // } catch (error) {
      //   if (error.response.status === 422) {
      //     this.authErrors = error.response.data.errors;
      //   }
      // }
    },
    async handleRegister(data) {
      // this.authErrors = [];
      await this.getToken();
      // try {
        await axios.post("/register", {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });
        this.router.push("/");
      // } catch (error) {
      //   if (error.response.status === 422) {
      //     this.authErrors = error.response.data.errors;
      //   }
      // }
    },
    async handleLogout() {
      await axios.post("/logout");
      this.authUser = null;
    },
    // async handleForgotPassword(email) {
    //   this.authErrors = [];
    //   this.getToken();
    //   try {
    //     const response = await axios.post("/forgot-password", {
    //       email: email,
    //     });
    //     this.authStatus = response.data.status;
    //   } catch (error) {
    //     if (error.response.status === 422) {
    //       this.authErrors = error.response.data.errors;
    //     }
    //   }
    // },
    // async handleResetPassword(resetData) {
    //   this.authErrors = [];
    //   try {
    //     const response = await axios.post("/reset-password", resetData);
    //     this.authStatus = response.data.status;
    //   } catch (error) {
    //     if (error.response.status === 422) {
    //       this.authErrors = error.response.data.errors;
    //     }
    //   }
    // },
  },
});

export const useFomations = defineStore("formations", {
  state: () => ({
    formations: null,
  }),
  getters: {
    formation: (state) => state.formations,
  },
  actions: {
    async fetchFormations() {
      const response = await axios.get("/api/formations");
      this.formations = response.data;
    },
    async fetchFormationById( id ) {
      try {
        const response = await axios.get(`/api/formations/${id}`);
        this.formations = response.data;
      } catch (error) {
        console.error('Error fetching formation:', error);
      }
    }
  }
});

export const useAdmins = defineStore("admins", {
  state: () => ({
    admins: null,
  }),
  getters: {
    admin: (state) => state.admin,
  },
  actions: {
    async fetchprofessors() {
      const response = await axios.get("/api/professors");
      this.admins = response.data;
      console.log(this.admins)
    },
    // async fetchFormationById( id ) {
    //   try {
    //     const response = await axios.get(`/api/formations/${id}`);
    //     this.formations = response.data;
    //   } catch (error) {
    //     console.error('Error fetching formation:', error);
    //   }
    // }
  }
});

export const useUser = defineStore("addUsers", {
  state: () => ({
    addUsers: null,
  }),
  actions: {
    async addUser(form, role) {
      role = role.toLowerCase();
      const response = await axios.post(`/api/users/${role}s`, form);
      this.addUsers = response.data;
    },
    async listProfessors() {
      const response = await axios.get(`/api/users/professors`);
      this.addUsers = response.data;
    },
    async listPaticipants() {
      const response = await axios.get(`/api/users/participants`);
      this.addUsers = response.data;
    },
  },
});
