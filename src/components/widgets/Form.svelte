<script></script>

<form name="visits" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="visits" />

    <div>
        <div class="input-wrap">
            <input type="text" name="name" id="name" placeholder="-" />
            <label for="name">Nombre: </label>
        </div>

        <div class="input-wrap">
            <input type="email" name="email" id="email" placeholder="-" />
            <label for="email">Correo electrónico: </label>
        </div>
    </div>

    <div class="input-wrap">
        <textarea name="message" id="message" rows="5" placeholder="-"></textarea>
        <label for="message">Mensaje: </label>
    </div>

    <button type="submit">Enviar</button>
</form>

<style lang="scss">
    @import '../../css/colors.scss';

    .input-wrap {
        position: relative;
    }

    form {
        width: 100%;
        max-width: 420px;
    }

    input,
    textarea {
        outline-color: rgb(162, 113, 0.5);
        line-height: 1.2em;
        font-size: 1.2em;
        padding: 12px 16px;
        color: $grey;
        background-color: $white;
        width: 100%;
        margin-bottom: 20px;

        &::placeholder {
            color: transparent;
        }

        &:focus+label,
        &:not(:placeholder-shown)+label {
            transform: translate(12px, -50%);
            font-size: 1em;
        }
    }

    label {
        position: absolute;
        left: 0;
        display: inline-block;
        padding: 0 4px;
        font-size: 1.1em;
        transition: transform .1s, font-size .2s;
        transform: translate(12px, 70%);
        background-color: $white;
    }

    button {
        display: inline-block;
        width: 100%;
        font-family: "Open Sans", Roboto, "Helvetica Neue", Helvetica, Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;
        font-weight: 600;
        line-height: 100%;
        background: #fff;
        font-size: 15px;
        border: 1px solid transparent;
        padding: 13px 12px 12px 13px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        cursor: pointer;
        -webkit-font-smoothing: antialiased !important;
        outline-color: rgb(162, 113, 0.5);
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
        -webkit-user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        box-shadow: 0 0 0 0.5px rgba(50, 50, 93, .17), 0 2px 5px 0 rgba(50, 50, 93, .1), 0 1px 1.5px 0 rgba(0, 0, 0, .07), 0 1px 2px 0 rgba(0, 0, 0, .08), 0 0 0 0 transparent !important;
        color: $grey !important;
        margin-bottom: 10px;

        &:hover {
            color: $color-primary !important;
            background-color: #fafafa;
        }

        &:active {
            border-width: 2px 1px 0px 1px;
        }
    }
</style>