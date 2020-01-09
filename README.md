# Elf Logging

Elf Logging is a logging and error catching utility for the Elf- suite. If an error occurs while executing the contents of a controller method, it catches that error, logs it, and returns a `500` status code to the client. To use, simply decorate a controller method with `@Logger()`. Define a logging mode by setting the `ELF_LOG_MODE` environment variable to either `console` or `file`. Setting log mode to `file` writes to a `elf.log` file in the root folder of your project.
