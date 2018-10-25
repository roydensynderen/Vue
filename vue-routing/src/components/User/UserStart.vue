<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link class='list-group-item' 
                         to='/user/1' 
                         tag='li' 
                         style='cursor: pointer'>User 1</router-link>
            <router-link class='list-group-item' 
                         to='/user/2' 
                         tag='li' 
                         style='cursor: pointer'>User 2</router-link>                 
            <router-link class='list-group-item' 
                         to='/user/3' 
                         tag='li' 
                         style='cursor: pointer'>User 3</router-link>
        </ul>
    </div>
</template>