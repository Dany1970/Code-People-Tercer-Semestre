import psycopg2

class Conexion:
    DATABASE = "nombre_base_de_datos"
    USERNAME = "nombre_usuario"
    PASSWORD = "contraseña"
    DBPORT = "puerto"
    HOST = "host"

    conexion = None
    cursor = None

    @staticmethod
    def obtenerConexion():
        if Conexion.conexion is None:
            try:
                Conexion.conexion = psycopg2.connect(database=Conexion.DATABASE,
                                                    user=Conexion.USERNAME,
                                                    password=Conexion.PASSWORD,
                                                    port=Conexion.DBPORT,
                                                    host=Conexion.HOST)
                print("Conexión establecida")
            except psycopg2.Error as e:
                print("Error al conectar a la base de datos:", e)
        return Conexion.conexion

    @staticmethod
    def obtenerCursor():
        if Conexion.cursor is None:
            conexion = Conexion.obtenerConexion()
            Conexion.cursor = conexion.cursor()
        return Conexion.cursor

    @staticmethod
    def cerrar():
        if Conexion.cursor is not None:
            Conexion.cursor.close()
            Conexion.cursor = None
            print("Cursor cerrado")
        if Conexion.conexion is not None:
            Conexion.conexion.close()
            Conexion.conexion = None
            print("Conexión cerrada")
            
    
class Persona:
    def __init__(self, id_persona, nombre, apellido, email):
        self.__id_persona = id_persona
        self.__nombre = nombre
        self.__apellido = apellido
        self.__email = email

    def __str__(self):
        return f"ID: {self.__id_persona}, Nombre: {self.__nombre}, Apellido: {self.__apellido}, Email: {self.__email}"

    # Métodos de acceso para id_persona
    def get_id_persona(self):
        return self.__id_persona

    def set_id_persona(self, id_persona):
        self.__id_persona = id_persona

    # Métodos de acceso para nombre
    def get_nombre(self):
        return self.__nombre

    def set_nombre(self, nombre):
        self.__nombre = nombre

    # Métodos de acceso para apellido
    def get_apellido(self):
        return self.__apellido

    def set_apellido(self, apellido):
        self.__apellido = apellido

    # Métodos de acceso para email
    def get_email(self):
        return self.__email

    def set_email(self, email):
        self.__email = email

class PersonaDao:
    SELECCIONAR = "SELECT * FROM personas"
    ACTUALIZAR = "UPDATE personas SET nombre = %s, apellido = %s, email = %s WHERE id_persona = %s"
    INSERTAR = "INSERT INTO personas (nombre, apellido, email) VALUES (%s, %s, %s)"
    ELIMINAR = "DELETE FROM personas WHERE id_persona = %s"

    @classmethod
    def seleccionar(cls):
        print("Ejecutando consulta:", cls.SELECCIONAR)

    @classmethod
    def insertar(cls, persona):
        print("Ejecutando consulta:", cls.INSERTAR)
        # Aquí iría el código para insertar la persona en la base de datos

    @staticmethod
    def actualizar(vos, persona):
        print("Ejecutando consulta:", vos.ACTUALIZAR)
        # Aquí iría el código para actualizar la persona en la base de datos

    @staticmethod
    def eliminar(vos, persona):
        print("Ejecutando consulta:", vos.ELIMINAR)
        # Aquí iría el código para eliminar la persona de la base de datos

