import reflex as rx
import link_bio.constants as const
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import Size


def links() -> rx.Component:
    return rx.vstack(
        title("Progreso"),
        link_button(
            "Programa Jovenes Samsung Innovation Campus",
            "Python - Alianza con la U Rosario",
            "icons/infobae.svg",
            const.TWITCH_URL
        ),
        link_button(
            "Insignia U Rosario - Samsung",
            "Codificacion y Programacion en Python",
            "icons/code.svg",
            const.YOUTUBE_URL
        ),
        link_button(
            "1er puesto al Challenge de educacion - AI Lab",
            "Hackaton IA",
            "icons/ailab.svg",
            const.DISCORD_URL
        ),
        link_button(
            "Pylatam",
            "Conferencia Python en Monterrey",
            "icons/code.svg",
            const.CODE_CHALLENGES_URL
        ),
    )

    #     title("Recursos y más"),
    #     link_button(
    #         "Git y GitHub desde cero",
    #         "Aquí puedes comprar mi libro en formato físico y eBook",
    #         "icons/git.svg",
    #         const.BOOK_URL
    #     ),
    #     link_button(
    #         "Libros recomendados",
    #         "Mi listado de libros sobre programación, ciencia y tecnología",
    #         "icons/book.svg",
    #         const.BOOKS_URL
    #     ),
    #     link_button(
    #         "Mi setup",
    #         "Listado con todos los elementos que uso en mi trabajo",
    #         "icons/setup.svg",
    #         const.SETUP_URL
    #     ),
    #     link_button(
    #         "MoureDev",
    #         "Mi sitio web",
    #         "icons/logo.png",
    #         const.MOUREDEV_URL
    #     ),
    #     link_button(
    #         "Invítame a un café",
    #         "¿Quieres ayudarme a que siga creando contenido?",
    #         "icons/coffee.svg",
    #         const.COFFEE_URL
    #     ),

    #     title("Contacto"),
    #     link_button(
    #         "MyPublicInbox",
    #         "Respuesta rápida y con preferencia",
    #         "icons/checkemail.svg",
    #         const.MYPUBLICINBOX_URL
    #     ),
    #     link_button(
    #         "Email",
    #         const.EMAIL,
    #         "icons/email.svg",
    #         f"mailto:{const.EMAIL}"
    #     ),
    #     width="100%",
    #     spacing=Size.DEFAULT.value,
    # )
