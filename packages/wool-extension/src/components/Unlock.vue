<template>
  <div class="px-4 h-full flex flex-col">
    <Text is="h1" class="font-bold text-center p-2.5">Bit Wallet</Text>

    <form class="text-center">
      <img class="w-40 my-10" src="/logo.png" alt="logo" />

      <Text is="h3" class="text-left">输入您的密码</Text>
      <InputBase class="w-full mt-4" placeholder="请输入密码" />

      <ButtonBase type="text">忘记密码？</ButtonBase>
    </form>

    <div class="text-center p-y-2.5 mt-auto">
      <ButtonBase class="w-full">Unlock</ButtonBase>
    </div>
  </div>
</template>
