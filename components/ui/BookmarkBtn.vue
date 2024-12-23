<template>
  <button class="bookmark-btn">
    <svg
      class="bookmark-icon"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7094 15.6388L5.5 20.0741V3.54565H18.5V20.0741L12.2906 15.6388L12 15.4312L11.7094 15.6388Z"
        stroke="white"
      />
    </svg>
  </button>
</template>

<style scoped>
.bookmark-btn {
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.bookmark-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease, fill 0.3s ease, fill-opacity 0.3s ease;
  fill-opacity: 0.4;
  fill: #fff;
}

.bookmark-icon:hover {
  transform: scale(1.1);
  fill-opacity: 1;
  fill: var(--color-primary-500);
}
</style>
