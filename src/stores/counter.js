import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken=true;
axios.defaults.baseURL = "http://localhost:8000";


export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    userWithInfo: null,
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
    async getUserWithInfo(role, id) {
      const response = await axios.get(`/api/users/${role}/${id}`);
      this.userWithInfo = response.data;
      return this.userWithInfo; 
  },
    async handleLogin(data) {
      // this.authErrors = [];
      await this.getToken();

      // try {
        await axios.post("/login", {
          email: data.email,
          password: data.password,
        });
     // } catch (error) {
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
      // } catch (error) {
      //   if (error.response.status === 422) {
      //     this.authErrors = error.response.data.errors;
      //   }
      // }
    },
    
    async handleLogout() {
      try {
        await axios.post('/logout');
        this.authUser = null; // Reset authUser to null after successful logout
      } catch (error) {
        console.error('Logout failed:', error);
      }
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
    async fetchFormationsByProfessor(id) {
      const response = await axios.get(`/api/formationsProf/${id}`);
      this.formations = response.data;
    },
    async fetchFormationById( id ) {
      try {
        const response = await axios.get(`/api/formations/${id}`);
        this.formations = response.data;
      } catch (error) {
        console.error('Error fetching formation:', error);
      }
    },
    async fetchFormationByParticipant( id ) {
      try {
        const response = await axios.get(`/api/participants/${id}`);
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
    professors: null,
    participants: null,
    addCourse: null,
    addCentre: null,
    getCentre: null,
    listFormationsWithInfo: null,
    listProfessorsInfo: null,
    listParticipantsInfos: null,
    listCentresInfo: null,
  }),
  actions: {
    async addUser(form, role) {
      role = role.toLowerCase();
      console.log(role);
      const response = await axios.post(`/api/users/${role}s`, form);
      this.addUsers = response.data;
      console.log(this.addUsers);
    },
    async deleteUser(id, role) {
      try {
        await axios.delete(`/api/users/${role}/${id}`);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    async deleteCentre(id) {
      try {
        await axios.delete(`/api/centres/${id}`);
      } catch (error) {
        console.error('Error deleting centre:', error);
      }
    },
    async deleteFormation(id) {
      try {
        await axios.delete(`/api/formations/${id}`);
      } catch (error) {
        console.error('Error deleting formations:', error);
      }
    },
    async updateUser(id, role, form) {
      const response = await axios.put(`/api/users/${role}/${id}`, form);
      return response.data;
    },
    async updateFormation(id, form) {
      const response = await axios.put(`/api/formations/${id}`, form);
      return response.data;
    },
    async saveEditedParticipant(participant) {
      try {
        const response = await axios.put(`/api/users/participants/${participant.id}`, participant); 
        return response.data;
      } catch (error) {
        console.error('Error updating participant:', error);
        throw error;
      }
    },
    async saveEditedProfessor(professors) {
      try {
        const response = await axios.put(`/api/users/professors/${professors.id}`, professors); 
        return response.data;
      } catch (error) {
        console.error('Error updating professor:', error);
        throw error;
      }
    },
    async saveEditedCentre(centres) {
      try {
        const response = await axios.put(`/api/centres/${centres.id}`, centres); 
        return response.data;
      } catch (error) {
        console.error('Error updating centre:', error);
        throw error;
      }
    },
    
    async saveEditedFormation(formation) {
      try {
        const response = await axios.put(`/api/formations/${formation.id}`, formation); 
        return response.data;
      } catch (error) {
        console.error('Error updating formations:', error);
        throw error;
      }
    },    
    async listProfessors() {
      const response = await axios.get(`/api/users/professors`);
      this.professors = response.data;
    },
    async listParticipants() {
      const response = await axios.get(`/api/users/participants`);
      this.participants = response.data;
    },
    async addCourse(form) {
      const response = await axios.post(`/api/formations`, form);
      this.addCourse = response.data;
    },
    async addCentre(form) {
      const response = await axios.post(`/api/centres`, form);
      this.addCentre = response.data;
    },
    async getCentre() {
      const response = await axios.get(`/api/centres`);
      this.listCentresInfo = response.data;
    },
    async listFormationsWithInfo() {
      const response = await axios.get(`/api/formations`);
      this.listFormationsWithInfo = response.data;
    },
  },
});


export const useInscriptions = defineStore("inscriptions", {
  state: () => ({
    inscriptions: null,
  }),
  actions: {
    async inscription(form) {
      const response = await axios.post(`/api/inscriptions`, form);
      this.inscriptions = response.data;
    },
  },
});


export const useCentres = defineStore("centres", {
  state: () => ({
    centres: null,
  }),
  getters: {
    centre: (state) => state.centres,
  },
  actions: {
    async fetchCentres() {
      const response = await axios.get("/api/centres/roomsFormationsCount");
      this.centres = response.data;
    },
    async fetchFormationsByCentre(id) {
      const response = await axios.get(`/api/centres/${id}/formations`);
      this.centres = response.data;
    },
  }
});

