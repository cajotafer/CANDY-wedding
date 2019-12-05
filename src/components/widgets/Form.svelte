<script></script>

<form name="comment" method="POST" data-netlify="true" data-netlify-recaptcha="true">
    <input type="hidden" name="form-name" value="comment" />
    <p>
        <label>Nombre: <input type="text" name="name" /></label>
    </p>
    <p>
        <label>Correo electrónico: <input type="email" name="email" /></label>
    </p>
    <p>
        <label>Relación: <select name="role[]" multiple>
                <option value="family">Familia</option>
                <option value="friend">Amistad</option>
            </select></label>
    </p>
    <p>
        <label>Mensaje: <textarea name="message"></textarea></label>
    </p>
    <div data-netlify-recaptcha="true">
    </div>
    <p>
        <button type="submit">Enviar</button>
    </p>
</form>

<style lang="scss"></style>