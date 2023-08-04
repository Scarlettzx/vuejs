<template>
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col">
      <h1 class="text-5xl font-bold py-4">Login</h1>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control w-80">
          <label class="label">
            <span class="label-text font-semibold">Username</span>
          </label>
          <input type="text" placeholder="username" class="input input-bordered placeholder-gray-500 placeholder-opacity-75" />
        </div>
        <div class="form-control w-80">
          <label class="label">
            <span class="label-text font-semibold">Password</span>
          </label>
          <input type="password" placeholder="password" class="input input-bordered placeholder-gray-500 placeholder-opacity-75" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>