<script setup>
    
</script>

<template>
    <h1>Article</h1>
    <div class="article_list">
        <div class="article_item">
            <h3 class="article_title">React component won't re-render on state change</h3>
            <summary>
                <p class="article_content">I am currently working on an interactive map where a Reset View button becomes visible if the 'matrix' state object is not equal to a specific set of values. This is done using a ternary operator.</p>
                <p>For some reason, the component is not re-rendering (the return statement re-returning, essentially) when the 'matrix' state variable changes. I need to change another aspect of state (from useSelector) to actually force the react component to re-render, displaying the button.</p>
            </summary>
        </div>
    </div>
</template>

<style lang="less" scoped>
.article_list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 8px;
    h3 {
        font-size: 2rem;
        line-height: 1.7;
    }
    p {
        margin-top: 2.3333333333em;
    font-size: 1.2rem;
    letter-spacing: .1em;
    line-height: 2.2;
    }
}
.article_list:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>

