<script setup>
import { AlertCircle } from 'lucide-vue-next'
import { z } from 'zod'
import { toast } from 'vue-sonner'

const LoginSchema = z.object({
  token: z.string().describe('密码'),
})
const loginFieldConfig = {
  token: {
    inputProps: {
      type: 'password',
      placeholder: '********',
    },
  },
}

const { previewMode } = useRuntimeConfig().public

async function onSubmit(form) {
  try {
    localStorage.setItem('SinkSiteToken', form.token)
    await useAPI('/api/verify')
    navigateTo('/dashboard')
  }
  catch (e) {
    console.error(e)
    toast.error('登录失败，请重试', {
      description: e.message,
    })
  }
}
</script>

<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle class="text-2xl">
        登录
      </CardTitle>
      <CardDescription>
        请输入访问密码进行登录
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <AutoForm
        class="space-y-6"
        :schema="LoginSchema"
        :field-config="loginFieldConfig"
        @submit="onSubmit"
      >
        <Alert v-if="previewMode">
          <AlertCircle class="w-4 h-4" />
          <AlertTitle>提示</AlertTitle>
          <AlertDescription>
            访客模式的密码是： <code class="font-mono text-green-500">duanduan</code> .
          </AlertDescription>
        </Alert>
        <Button class="w-full">
          登录
        </Button>
      </AutoForm>
    </CardContent>
  </Card>
</template>
