<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Página del usuario</div>
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label for="username" class="form-label">Cambiar nombre de usuario</label>
                  <input type="text" class="form-control" id="username" v-model="username" />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Cambiar contraseña</label>
                  <input type="password" class="form-control" id="password" v-model="password" />
                </div>
                <div class="mb-3">
                  <label for="color" class="form-label">Color de perfil</label>
                  <input type="color" class="form-control form-control-color" id="color" v-model="
  color
  "/>
                </div>
                <button type="
                    submit
                    "
                    class="
                    btn btn-primary
                    "
                    >Guardar cambios</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup
    >import { ref } from "vue";
    
    const username = ref("");
    const password = ref("");
    const color = ref("#ffffff");
</script>