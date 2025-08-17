import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'NoteAppDb',
    location: 'default',
  },
  () => {
    console.log('Database opened');
  },
  error => {
    console.log('DB Error', error);
  },
);
export const initializeDatabase = () => {
  db.transaction(
    tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, user_name TEXT, email TEXT, password TEXT, cocuk_ismi TEXT);',
      );
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Diary (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL,title TEXT, description TEXT, FOREIGN KEY(user_id) REFERENCES Users(id));',
      );
    },
    error => console.log('DB init error', error),
    () => console.log('Tüm tablolar başarılı bir şekilde oluşturuldu'),
  );
};

export const insertUserDb = async user => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM Users WHERE email=?`,
        [user.email],
        (tx, results) => {
          // SELECT sorgusu başarı callback'i
          if (results.rows.length > 0) {
            reject({ success: false, message: 'Kullanıcı kaydı mevcut.' });
          } else {
            tx.executeSql(
              'INSERT INTO Users (user_name, email, password, cocuk_ismi) VALUES(?,?,?,?)',
              [user.name, user.email, user.password, user.cocuk_ismi],
              (tx, results) => {
                // INSERT sorgusu başarı callback'i
                resolve({
                  success: true,
                  message: 'Kullanıcı başarıyla eklendi.',
                });
              },
              (tx, error) => {
                // INSERT sorgusu HATA callback'i (doğru yerde)
                console.log('INSERT error:', error); // Hata ayıklama için
                reject(
                  error.message || 'Kullanıcı eklenirken bir hata oluştu.',
                );
              },
            );
          }
        },
        (tx, error) => {
          // SELECT sorgusu HATA callback'i (doğru yerde)
          console.log('SELECT error:', error); // Hata ayıklama için
          reject(
            error.message || 'Kullanıcı kontrol edilirken bir hata oluştu.',
          );
        },
      );
    });
  });
};

export const insertNoteDb = values => {
  db.transaction(
    tx => {
      tx.executeSql(
        'INSERT OR REPLACE INTO Diary ( user_id, title, description) VALUES(?,?,?)',
        [values.user_id, values.title, values.description],
      );
    },

    error => console.log('Veri ekleme hatası', error),
    () => console.log('Veri başarılı bir şekilde eklendi'),
  );
};

export const getUsersFromDb = async values => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM Users WHERE email=?  AND password=? `,
        [values.email, values.password],
        (tx, results) => {
          if (results.rows.length > 0) {
            const user = results.rows.item(0);
            if (user.password == values.password) {
              resolve({ success: true, message: 'Giriş başarılı', user });
            } else {
              reject({ success: false, message: 'Şifre yanlış' });
            }
          } else {
            reject({ success: false, message: 'Kullanıcı bulunamadı' });
          }
        },
        (tx, error) => {
          console.log('Sorgu hatası', error);
          reject(error);
        },
      );
    });
  });
};

export const getUsersInfoFromDb = async userId => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM Users WHERE id=?`,
        [userId],
        (tx, results) => {
          if (results.rows.length > 0) {
            const user = results.rows.item(0);
            resolve(user);
          } else reject({ success: false, message: 'Kullanıcı Bulunamadı' });
        },
        (tx, error) => {
          reject(error);
        },
      );
    });
  });
};
export const getNotesFromDb = async values => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM Diary WHERE user_id=?`,
        [values.user_id],
        (tx, results) => {
          console.log('Tamamlandı');
          const len = results.rows.length;
          const diary = [];
          for (let i = 0; i < len; i++) {
            diary.push(results.rows.item(i));
          }
          console.log('GELEN NOTLAR:', diary);
          resolve(diary);
        },
        (tx, error) => {
          reject(error);
        },
      );
    });
  });
};
export const updateUserFromDb = async values => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE Users SET user_name=?, password=?, cocuk_ismi=? WHERE id=?`,
        [values.username, values.password, values.cocuk_ismi, values.id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            resolve({ success: true, message: 'Kullanıcı güncellendi' });
          } else {
            reject({ success: false, message: 'Güncelleme yapılamadı!' });
          }
        },
        (tx, error) => {
          reject(error);
        },
      );
    });
  });
};
export const deleteNoteFromDb = async notId => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM Diary WHERE id=?`,
        [notId],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            resolve({ success: true, message: 'Silme işlemi başarılı' });
          } else
            reject({ success: false, message: 'Silme işlemi yapılamadı!' });
        },
        (tx, error) => {
          reject(error);
        },
      );
    });
  });
};
