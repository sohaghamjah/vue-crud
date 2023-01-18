<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header text-end">
                        <router-link class="btn btn-primary" :to="{ name: 'add' }">Add New</router-link>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col" width="15%">Action</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(student, index) in students.data" :key="index">
                                    <th scope="row">SL</th>
                                    <td>{{ student.name }}</td>
                                    <td>{{ student.email }}</td>
                                    <td>{{ student.phone }}</td>
                                    <td>{{ student.gender }}</td>
                                    <td>
                                        <router-link :to="{ name: 'student.edit', params: {id : student.id} }" class="btn btn-sm me-1 btn-info">
                                            Edit
                                        </router-link>
                                        <a href="" @click.prevent="destroy(student.id)" class="btn btn-sm btn-danger">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'List',
        data() {
            return{
                students: []
            }
        },
        mounted(){
           this.fetchData();
        },
        methods:{
            fetchData(){
                 axios.get('/api/student')
                .then(res => {
                    this.students = res.data
                })
                .catch(error => {

                });
            },
            destroy(id){
                if(!window.confirm('Are you sure to delete?')){
                    return;
                }else{
                    axios.delete('/api/student/'+id)
                    .then(res => {
                        this.fetchData();
                    })
                    .catch(error => {

                    });
                }
            }
        }
    }
</script>

<style>

</style>
