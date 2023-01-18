<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-md-6 mx-auto">
                <div class="card">
                    <div class="card-header d-flex align-items-center justify-content-between text-end">
                        <h4>Edit Student</h4>
                        <router-link class="btn btn-sm btn-primary" :to="{ name: 'list' }">Student List</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="storeData">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="name" v-model="form.name" class="form-control" id="name"
                                    placeholder="Enter name">
                                <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" v-model="form.email" class="form-control" id="email"
                                    placeholder="Enter Email">
                                <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="Phone" class="form-label">Phone</label>
                                <input type="Phone" v-model="form.phone" class="form-control" id="Phone"
                                    placeholder="Enter your phone">
                                <span class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="Phone" class="form-label">Gender</label>
                                <select class="form-control" v-model="form.gender" name="" id="">
                                    <option value="">Select One</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <span class="text-danger" v-if="errors.gender">{{ errors.gender[0] }}</span>
                            </div>
                            <button type="submit" class="btn btn-primary float-end">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Edit',

        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    phone: '',
                    gender: '',
                },
                errors: {},
            }
        },

        mounted(){
          this.editData();
        },

        methods: {
            editData() {
                axios.get('/api/student/'+ this.$route.params.id)
                    .then(res => {
                        if (res.status == 200) {
                            this.form = res.data.data;
                        }
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors;
                    })
            }
        }
    }
</script>

<style>

</style>
