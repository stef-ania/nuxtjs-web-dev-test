<template>
  <h3 class="hidden-in-desktop">BUY · 240 Yacths</h3>
  <div class="grid-header-list">
    <h3 class="hidden-in-mobile">Yacth for sale · 340</h3>
    <nav>
      <div class="grid-options">
        View
        <button>2 products</button>
        <button>4 products</button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.grid-header-list {
  display: flex;
  justify-content: center;
  margin-bottom: 1.875rem;
}

.hidden-in-desktop {
  text-align: center;
  display: block;
  margin: 0 auto;
}

.hidden-in-mobile {
  display: none;
}

.grid-options {
  opacity: 0;
}

@media (min-width: 1024px) {
  .hidden-in-desktop {
    display: none;
  }
  .grid-header-list {
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .hidden-in-mobile {
    display: initial;
    font-size: var(--font-size-md);
    line-height: 150%;
    color: var(--ocean-lux-800);
  }

  .grid-options {
    opacity: 1;
    border-left: 1px solid var(--black-scale-200);
    padding-left: 1.25rem;
    color: var(--ocean-lux-600);
  }
}
</style>
