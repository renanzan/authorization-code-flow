<#macro kw invalid name autofocus=false disabled=false message=true required=true rest...>
  <label class="sr-only" for="${name}">
    <#nested>
  </label>

  <div class="relative">
    <input
      id="${name}"
      name="${name}"
      aria-invalid="${messagesPerField.existsError(invalid)?c}"
      class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      <#if autofocus>autofocus</#if>
      <#if disabled>disabled</#if>
      <#if required>required</#if>
      <#list rest as attrName, attrValue>
        ${attrName}="${attrValue}"
      </#list>
    >
    <label
      for="${name}"
      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
        <#nested>
    </label>
  </div>

  <#if message && messagesPerField.existsError(invalid)>
    <div class="mt-2 text-red-600 text-sm">
      ${kcSanitize(messagesPerField.getFirstError(invalid))?no_esc}
    </div>
  </#if>
</#macro>
