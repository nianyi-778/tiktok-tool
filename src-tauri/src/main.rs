#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
// use tauri::{AboutMetadata, Menu, MenuItem, Submenu};
mod command;

fn main() {
  // let menu = Menu::new();

  // #[cfg(target_os = "macos")]
  // {
  //     menu = menu.add_submenu(Submenu::new(
  //         "哆啦B梦百宝箱",
  //         Menu::new()
  //             .add_native_item(MenuItem::About("".into(), AboutMetadata::default()))
  //             .add_native_item(MenuItem::SelectAll)
  //             .add_native_item(MenuItem::Quit),
  //     ));
  // }

  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![
          command::get_url_id,
          command::get_video_info_by_id,
          command::get_video_full_info_by_id,
          command::download_video,
          command::get_user_info_by_url,
          command::get_user_full_info_by_url,
          command::get_list_by_user_id,
      ])
      // .menu(menu)
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}
