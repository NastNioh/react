import random
import string

def generate_id(length=10):
    characters = string.ascii_letters + string.digits
    generated_id = ''.join(random.choice(characters) for _ in range(length))
    return generated_id

