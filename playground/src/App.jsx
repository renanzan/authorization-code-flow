export default function App() {
  return (
    <div class="bg-gray-100 flex flex-col items-center justify-center min-h-screen sm:py-16">
      <div class="max-w-md space-y-6 w-full">
        <div class="bg-white p-8 rounded-lg space-y-6">
          <header class="space-y-4">
            <div class="font-bold text-center text-2xl">
              Bem vindo a Incentiv
            </div>
          </header>

          <main class="space-y-4">
            <form
              action="http://localhost:8080/auth/realms/incentiv-auth/login-actions/authenticate?session_code=DICksnXp6O8FAoiQNo3EpbRPN0-d5u-T6-wL3JhAK9s&amp;execution=42ab6e01-eee7-4840-9939-0d787f65f03e&amp;client_id=account-console&amp;tab_id=yK3lRhSXx5I"
              class="m-0 space-y-4"
              method="post"
              onsubmit="login.disabled = true; return true;"
            >
              <input name="credentialId" type="hidden" value="" />

              <div class="relative">
                <input
                  type="text"
                  id="floating_outlined"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Floating outlined
                </label>
              </div>

              <div>
                <label class="sr-only" for="username">
                  Email{" "}
                </label>
                <input
                  autofocus=""
                  required=""
                  aria-invalid="false"
                  class="block border-gray-300 mt-1 rounded-md w-full focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 sm:text-sm"
                  id="username"
                  name="username"
                  placeholder="Email"
                  autocomplete="email"
                  type="text"
                  value=""
                />
              </div>
              <div>
                <label class="sr-only" for="password">
                  Password
                </label>
                <input
                  required=""
                  aria-invalid="false"
                  class="block border-gray-300 mt-1 rounded-md w-full focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 sm:text-sm"
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    class="border-gray-300 h-4 rounded text-primary-600 w-4 focus:ring-primary-200 focus:ring-opacity-50"
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                  />
                  <label
                    class="block ml-2 text-gray-900 text-sm"
                    for="rememberMe"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  class="text-primary-600 hover:text-primary-500"
                  href="/auth/realms/incentiv-auth/login-actions/reset-credentials?client_id=account-console&amp;tab_id=yK3lRhSXx5I"
                >
                  <span class="text-sm">Forgot Password?</span>
                </a>
              </div>
              <div class="pt-4">
                <button
                  class="bg-primary-600 flex justify-center px-4 py-2 relative rounded-lg text-sm text-white w-full focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 hover:bg-primary-700"
                  name="login"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </main>
          <footer class="space-y-4">
            <div class="text-center">
              New user?
              <a
                class="text-primary-600 hover:text-primary-500"
                href="/auth/realms/incentiv-auth/login-actions/registration?client_id=account-console&amp;tab_id=yK3lRhSXx5I"
              >
                Register
              </a>
            </div>
          </footer>
        </div>
        <div class="flex justify-around"></div>
      </div>
    </div>
  );
}
