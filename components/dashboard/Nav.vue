<script setup>
const route = useRoute()
</script>

<template>
  <nav class="flex justify-between">
    <Tabs
      v-if="route.path !== '/dashboard/link'"
      :default-value="route.path"
      @update:model-value="navigateTo"
    >
      <TabsList>
        <TabsTrigger
          value="/dashboard/links"
        >
          链接列表
        </TabsTrigger>
        <TabsTrigger value="/dashboard/analysis">
          访问分析
        </TabsTrigger>
      </TabsList>
    </Tabs>
    <slot name="left" />
    <div>
      <slot />
    </div>
  </nav>
</template>
