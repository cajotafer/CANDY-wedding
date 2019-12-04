<script>
    export let text;
    export let href;
    export let outline = false;
    export let disabled = false;
</script>



{#if href && text }
 <a {href} class:outline class:disabled aria-disabled={disabled} tabindex="0">{text}</a>
{:else if text}
 <a role="button" class:outline class:disabled aria-disabled={disabled} tabindex="0">{text}</a>
{/if}

<style lang="scss">
    @import '../../css/colors.scss';

    /* a {
        padding: 8px 16px;
        border-radius: 4px;
        letter-spacing: 0.1em;
        font-size: 0.8em;
        cursor: pointer;
        background: linear-gradient(60deg, #d69b00 0%, #a57a00 36%, #715500 98%);
        color: $white;
        transition: .3s;
    }

    a:hover, a:focus {
        box-shadow: 0px 4px 15px 0px rgba(20, 20, 20, 0.25);
    }

    a:active {
        padding: 6px 12px;
        margin: 2px 4px;
        box-shadow: initial;
    }

    .outline {
        background: transparent;
        color: $color-primary;
        border: 1px solid $color-primary;
    }*/

    .disabled {
        opacity: 0.3;
        cursor: initial;
    } 

    a {
        display: inline-block;
        font-family: "Open Sans",Roboto,"Helvetica Neue",Helvetica,Optima,Segoe,"Segoe UI",Candara,Calibri,Arial,sans-serif;
        font-weight: 600;
        line-height: 100%;
        background: #fff;
        font-size: 15px;
        border: 1px solid transparent;
        padding: 13px 12px 12px 13px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        cursor: pointer;
        -webkit-font-smoothing: antialiased!important;
        outline-color: rgba(0,78,255,0.5);
        text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
        -webkit-user-select: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        box-shadow: 0 0 0 0.5px rgba(50,50,93,.17), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1.5px 0 rgba(0,0,0,.07), 0 1px 2px 0 rgba(0,0,0,.08), 0 0 0 0 transparent!important;
        color: $grey !important;

            &:hover {
                color: $color-primary !important;
                background-color: #fafafa;
            }     

            &:active {
                border-width: 2px 1px 0px 1px;
            }
    }
</style>